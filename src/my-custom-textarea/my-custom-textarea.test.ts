import {expect, assert} from 'chai';
import { MyCustomTextareaProps } from './my-custom-textarea.comp';
import { Spy } from '../test-utils';
import { createMyCustomTextarea } from './my-custom-textarea.driver';
import * as jsdomGlobal from 'jsdom-global';

describe('My custom textarea test suite', () => {
	let cleanup: any;
	beforeEach(() => {
		cleanup = jsdomGlobal();
	});

	afterEach(() => {
		cleanup();
	});

	it('Should render a textarea with the desired value and call callback on change', () => {
		const spy = new Spy();
		const initialValue = 'I am the text content';

		const props: MyCustomTextareaProps = {
			value: initialValue,
			onChange: spy.fn
		};

		const myCustomTextarea = createMyCustomTextarea(props);

		expect(myCustomTextarea.getValue()).to.eql(initialValue);
		expect(spy.called()).to.eql(false);
		myCustomTextarea.enterValue('Some new value');
		expect(spy.called()).to.eql(true);
	});
})