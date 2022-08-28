const $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
import {commit as imba_commit} from 'imba';

/*body*/
class Toggle {
	
	
	constructor(boolean = false){
		
		this.active = boolean;
	}
	
	get inactive(){
		return !(this.active);
	}
	get visible(){
		return this.active;
	}
	get invisible(){
		return this.inactive;
	}
	get enabled(){
		return this.active;
	}
	get disabled(){
		return this.inactive;
	}
	
	start(){
		
		this.active = true;
		return imba_commit();
	}
	
	stop(){
		
		this.active = false;
		return imba_commit();
	}
	
	enable(){
		return this.start();
	}
	disable(){
		return this.stop();
	}
	activate(){
		return this.start();
	}
	deactivate(){
		return this.stop();
	}
	
	toggle(){
		
		this.active = !(this.active);
		return imba_commit();
	}
}; globalThis.Toggle = Toggle;
