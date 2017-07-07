import * as React from 'react';
import Textarea from 'react-textarea-autosize';

export interface MyCustomTextareaProps {
	value: string;
	onChange: (newValue: string) => void;
}

export class MyCustomTextarea extends React.Component<MyCustomTextareaProps, any> {
	handleValueChange(e: any) {
		this.props.onChange(e.target.value);
	}

	render() {
		return (
			<Textarea value={this.props.value} onChange={this.handleValueChange.bind(this)}></Textarea>
		);
	}
}