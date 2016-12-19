const skills = ['ES6', 'React', 'Node.js', 'PHP', 'SCSS', 'Wordpress', 'Gulp', 'Three.js', 'Framework 7'];

const Skill = React.createClass({

	render: function() {
		return <li className="skill">{ this.props.skill }</li>;
	}
});

const Skills = React.createClass({

	render: function() {

		const skills_li = skills.map((skill) => {
			return <Skill skill={ skill } />
		});

		return (
			<ul className="skills-list">
				{ skills_li }
			</ul>
		)
	}
});

ReactDOM.render(<Skills />, document.querySelector('#skills'));

const work = [
	{
		name : 'Park IT ANPR',
		site : 'http://www.park-it-solutions.com/',
		tags : ['Node.js', 'ES6', 'APIs', 'Pug', 'SCSS', 'Gulp'],
		desc : 'Automatic Number Plate Registraton, Node JS server to screen'
	},
	{
		name : 'Crucial Trading',
		site : 'http://www.crucial-trading.com/',
		tags : ['React', 'ES6', 'Three.js', 'Wordpress', 'PHP', 'SCSS', 'Gulp'],
		desc : 'Website for Crucial Trading.'
	},
	{
		name : 'The Tattoo Book App',
		site : 'https://thetattoobook.co.uk/',
		tags : ['React', 'ES6', 'Webapp', 'Framework 7', 'APIs', 'iOS', 'Gulp'],
		desc : 'App for The Tattoo Book.'
	},
	{
		name : 'The Tattoo Book',
		site : 'https://thetattoobook.co.uk/',
		tags : ['Wordpress', 'PHP', 'Javascript', 'SCSS'],
		desc : 'Website for The Tattoo Book.'
	},
	{
		name : 'Hogarths Hotel',
		site : 'http://www.hogarths.co.uk/',
		tags : ['ES6', 'Wordpress', 'PHP', 'SCSS', 'Gulp'],
		desc : 'Website for Hogarths Hotel.'
	},
	{
		name : 'Airparks',
		site : 'http://www.airparks.co.uk/',
		tags : ['Framework 7', 'Javascript', 'APIs'],
		desc : 'Car check API'
	},
	{
		name : 'Spearhead eLearning',
		site : 'https://www.trainwithspearhead.co.uk/',
		tags : ['WordPress', 'PHP', 'APIs'],
		desc : 'Reed - Woocommerce, Woocommerce - Highfield.'
	},
	{
		name : 'Park IT',
		site : 'http://www.park-it-solutions.com/',
		tags : ['Wordpress', 'PHP', 'SCSS'],
		desc : 'Website for Park IT.'
	}
];

const Project = React.createClass({

	render: function() {

		const tags_li = this.props.project.tags.map((tag) => {
			return <li className="tag">{ tag }</li>;
		})

		return (
			<div className="project">
				<h1 className="project__name">{ this.props.project.name }</h1>
				<a href={ this.props.project.site } className="project__link">Website</a>
				<p className="project__desc">{ this.props.project.desc }</p>
				<ul className="project__tags">
					<li className="tag__header">Tags</li>
					{ tags_li }
				</ul>
			</div>
		);
	}
});

const Project_LI = React.createClass({

	handleClick: function() {
		this.props.projectClicked(this.props.index);
	},

	render: function() {
		return <li className="work-list__project" onClick={ this.handleClick }>{ this.props.project }</li>;
	}
});

const Work_List = React.createClass({

	handleClick: function(index) {
		this.props.projectClicked(index);
	},

	render: function() {

		const work_li = work.map((project, index) => {
			return <Project_LI project={ project.name } index={ index } projectClicked={ this.handleClick } />
		});

		return (
			<ul className="work-list">
				{ work_li }
			</ul>
		)
	}
});

const Work = React.createClass({

	getInitialState: function() {
		return {
			project : null
		}
	},

	handleClick: function(index) {
		this.setState({ project : index });
	},

	render: function() {

		let project = '';

		if ( this.state.project !== null ) {
			project = <Project project={ work[this.state.project] } />;
		}

		return (
			<div className="work-container">
				<Work_List projectClicked={ this.handleClick } />
				{ project }
			</div>
		);
	}
});

ReactDOM.render(<Work />, document.querySelector('#work'));