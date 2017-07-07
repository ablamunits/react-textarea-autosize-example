import * as React from 'react';
import {Simulate} from 'react-addons-test-utils';
import { MyCustomTextareaProps, MyCustomTextarea } from './my-custom-textarea.comp';
import { renderToBody } from '../test-utils';

export const createMyCustomTextarea = (props: MyCustomTextareaProps) => {
	const elem = renderToBody(React.createElement(MyCustomTextarea, props));
	return new MyCustomTextareaDriver(elem);
}

export class MyCustomTextareaDriver {
	elem: HTMLInputElement;

	constructor(elem: any) {
		this.elem = elem;
	}

	find(selector: string): Element {
		return this.elem.querySelector(selector);
	}

	getTextarea(): HTMLTextAreaElement {
		return this.find('textarea') as HTMLTextAreaElement;
	}

	getValue(): string {
		return this.getTextarea().value;
	}

	enterValue(newValue: string) {
		const textarea = this.getTextarea();
		textarea.value = newValue;
		Simulate.change(textarea);
	}
}