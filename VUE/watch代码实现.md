# watch代码实现

> //去重 防止重复收集
let uid = 0
class Watcher{
	constructor(vm,expOrFn,cb,options){
		//传进来的对象 例如Vue
		this.vm = vm
		if (options) {
	      this.deep = !!options.deep
	      this.user = !!options.user
	      this.lazy = !!options.lazy
	    }else{
	    	this.deep = this.user = this.lazy = false
	    }
	    this.dirty = this.lazy
		//在Vue中cb是更新视图的核心，调用diff并更新视图的过程
		this.cb = cb
		this.id = ++uid
		this.deps = []
	    this.newDeps = []
	    this.depIds = new Set()
	    this.newDepIds = new Set()
		if (typeof expOrFn === 'function') {
			//data依赖收集走此处
	      	this.getter = expOrFn
	    } else {
	    	//watch依赖走此处
	      	this.getter = this.parsePath(expOrFn)
	    }
		//设置Dep.target的值，依赖收集时的watcher对象
		this.value = this.lazy ? undefined : this.get()
	}

	get(){
		//设置Dep.target值，用以依赖收集
	    pushTarget(this)
	    const vm = this.vm
	    //此处会进行依赖收集 会调用data数据的 get
	    let value = this.getter.call(vm, vm)
	    popTarget()
	    return value
	}

	//添加依赖
  	addDep (dep) {
  		//去重
  		const id = dep.id
	    if (!this.newDepIds.has(id)) {
	      	this.newDepIds.add(id)
	      	this.newDeps.push(dep)
	      	if (!this.depIds.has(id)) {
	      		//收集watcher 每次data数据 set
	      		//时会遍历收集的watcher依赖进行相应视图更新或执行watch监听函数等操作
	        	dep.addSub(this)
	      	}
	    }
  	}

  	//更新
  	update () {
  		if (this.lazy) {
      		this.dirty = true
    	}else{
    		this.run()
    	}
	}

	//更新视图
	run(){
		console.log(`这里会去执行Vue的diff相关方法，进而更新数据`)
		const value = this.get()
		const oldValue = this.value
        this.value = value
		if (this.user) {
			//watch 监听走此处
            this.cb.call(this.vm, value, oldValue)
        }else{
        	//data 监听走此处
        	//这里只做简单的console.log 处理，在Vue中会调用diff过程从而更新视图
			this.cb.call(this.vm, value, oldValue)
        }
	}

    //如果计算熟悉依赖的data值发生变化时会调用
    //案例中 当data.name值发生变化时会执行此方法
	evaluate () {
	    this.value = this.get()
	    this.dirty = false
	}
	//收集依赖
	depend () {
	    let i = this.deps.length
	    while (i--) {
	      this.deps[i].depend()
	    }
	}

	// 此方法获得每个watch中key在data中对应的value值
	//使用split('.')是为了得到 像'a.b.c' 这样的监听值
	parsePath (path){
		const bailRE = /[^w.$]/
	  if (bailRE.test(path)) return
	  	const segments = path.split('.')
	  	return function (obj) {
		    for (let i = 0; i < segments.length; i++) {
		      	if (!obj) return
		      	//此处为了兼容我的代码做了一点修改	 
		        //此处使用新获得的值覆盖传入的值 因此能够处理 'a.b.c'这样的监听方式
		        if(i==0){
		        	obj = obj.data[segments[i]]
		        }else{
		        	obj = obj[segments[i]]
		        }
		    }
		    return obj
		 }
	}
}
