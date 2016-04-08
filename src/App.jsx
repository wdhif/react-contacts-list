import React from 'react';
import ContactsList from './ContactsList';
import Contact from './Contact';

let contacts = [{
	id: 1,
	name: 'Grant',
	phone: '555 111 5555'
}, {
	id: 2,
	name: 'Sattler',
	phone: '555 222 5555'
}, {
	id: 3,
	name: 'Grady',
	phone: '555 333 5555'
}, {
	id: 4,
	name: 'Dearing',
	phone: '555 444 5555'
}]

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts} />
			</div>
		)
	}
}

React.render(<App contacts={contacts} />, document.getElementById('app'));
