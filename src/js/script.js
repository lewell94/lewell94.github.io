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
		return <li className="project">{ this.props.project }</li>;
	}
});

const Work_List = React.createClass({
	render: function() {

		const work_li = work.map((project) => {
			return <Project project={ project.name } />
		});

		return (
			<ul className="work-list">
				{ work_li }
			</ul>
		)
	}
});

ReactDOM.render(<Work_List />, document.querySelector('#work'));