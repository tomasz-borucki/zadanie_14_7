var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			<div className={'row'}>
				<form className={'contactForm col s12 input-field'}>
					<input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}/>
					<input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}/>
					<input type={'email'} placeholder={'Email'} value={this.props.contact.email}/>
					<button type={'submit'}>Dodaj kontakt</button>
				</form>
			</div>
		)
	}
})