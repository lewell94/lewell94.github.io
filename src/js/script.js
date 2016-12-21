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
		desc : "Built for airport parking company Park IT's Automatic Number Plate Recognition system, "
	},
	{
		name : 'Crucial Trading Rugbuilder',
		site : 'http://www.crucial-trading.com/rugbuilder',
		tags : ['React', 'ES6', 'Three.js', 'Wordpress', 'PHP', 'SCSS', 'Gulp'],
		desc : "For their new website luxary rug company Crucial Trading wanted a Rug Builder that would allow customers to customise rugs in real time. Their previous solution was simple and image based, and therefore was limited in the user's ability to appreciate their designed rugs in full. For the new Rug Builder a more advanced solution was built utilising WebGL through Three.js for displaying the rug to the user, and React for the UI, which allows for a more responsive UI."
	},
	{
		name : 'Crucial Trading Website',
		site : 'http://www.crucial-trading.com/',
		tags : ['ES6', 'Wordpress', 'PHP', 'SCSS', 'Gulp'],
		desc : "Working for luxary rug company Crucial Trading to develop their new website, the website is a ",
		imgs : ['crucial-home', 'crucial-inspiration', 'crucial-material', 'crucial-search']
	},
	{
		name : 'The Tattoo Book App',
		site : 'https://thetattoobook.co.uk/',
		tags : ['React', 'ES6', 'Webapp', 'Framework 7', 'APIs', 'iOS', 'Gulp'],
		desc : "In addition to their new website, The Tattoo Book wanted a new app to launch. The app is an HTML5 webapp built with Phonegap, and uses Framework 7 to provide a native experience. The app communicates with a custom API built on the website that allows it receive the data it needs, and uses React for several interfaces including the messages, search results, and tattoo designs page.",
		imgs : ['ttbapp-profile', 'ttbapp-search', 'ttbapp-designs', 'ttbapp-message']
	},
	{
		name : 'The Tattoo Book',
		site : 'https://thetattoobook.co.uk/',
		tags : ['Wordpress', 'PHP', 'Javascript', 'SCSS'],
		desc : 'The Tattoo ',
		imgs : ['tattoobook-home', 'tattoobook-profile', 'tattoobook-request', 'tattoobook-search']
	},
	{
		name : 'Hogarths Hotel',
		site : 'http://www.hogarths.co.uk/',
		tags : ['ES6', 'Wordpress', 'PHP', 'SCSS', 'Gulp'],
		desc : 'Luxary hotel chain Hogarths Hotel needed a new website that would allow them to give each hotel in their chain their own personal site. Therefore a Wordpress multi site was created, along with variations in the Wordpress theme for each hotel in their chain. The site tkae advantage of several Wordpress features such as Custom Post Type and Meta Boxes, allowing Hogarths full control over the content and look of their website.',
		imgs : ['hogarths-home', 'hogarths-bedroom', 'hogarths-map', 'hogarths-menu']
	},
	{
		name : 'Airparks',
		site : 'http://www.airparks.co.uk/',
		tags : ['Framework 7', 'Javascript', 'APIs'],
		desc : 'Aiport car parking company Airparks wanted an app for customers to keep track of their cars whilst on holiday. The app uses Framework 7 to provide a native experience, and connects to the Airparks API to obtain the data. The app provides customers with a screen that shows them the location and status of their car, as well as allowing them to purchase upgrades and change their personal details.',
		imgs : ['airparks-home', 'airparks-menu', 'airparks-location', 'airparks-date', 'airparks-map', 'airparks-extra']
	},
	{
		name : 'Spearhead eLearning',
		site : 'https://www.trainwithspearhead.co.uk/',
		tags : ['WordPress', 'PHP', 'APIs'],
		desc : 'For their website eLearning company Spearhead needed to connect their Reed and Highfield services to create a unified system where, for example, a user can buy a course on Reed, have an account created on Spearhead, and access the course content on Highfield. Therefore two Wordpress plugins were created, on for connecting Reed to Spearhead, and the other for connecting Spearhead to Highfield. The plugins are built with PHP and use a simple OOP architecture.'
	},
	{
		name : 'Park IT',
		site : 'http://www.park-it-solutions.com/',
		tags : ['Wordpress', 'PHP', 'SCSS'],
		desc : 'Airport car parking company Park IT required a new website. The website is a Wordpress site with a modern design and allows Park IT to control the content and keep their customers up-to-date.',
		imgs : ['park-it-home', 'park-it-about', 'park-it-app', 'park-it-news']
	}
];

const Project = React.createClass({

	close: function() {
		window.location.hash = '#';
		this.props.projectClosed();
	},

	render: function() {

		const tags_li = this.props.project.tags.map((tag) => {
			return <li className="tag">{ tag }</li>;
		});

		let imgs = '';

		if ( this.props.project.imgs ) {
			imgs = this.props.project.imgs.map((img) => {

				let url = `https://lewell94.github.io/img/${img}.png`;
				let src = `./img/${img}.png`;

				return (
					<a href={ url } target="_blank">
						<img src={ src } alt={ img } className="project__img" onLoad="this.width/=2;this.onload=null;" />
					</a>
				);
			});
		}

		return (
			<div className="project">
				<a className="project__close" href="#" onClick={ this.close }>Close</a>
				<h1 className="project__name">{ this.props.project.name }</h1>
				<a href={ this.props.project.site } className="project__link">Website</a>
				<p className="project__desc">{ this.props.project.desc }</p>
				{ imgs }
				<ul className="project__tags">
					<li className="tag__header">Tags:</li>
					{ tags_li }
				</ul>
			</div>
		);
	}
});

const Project_LI = React.createClass({

	handleClick: function() {
		window.location.hash = encodeURIComponent(this.props.project);
		this.props.projectClicked(this.props.index);
	},

	render: function() {
		let id = this.props.project.toLowerCase().split(' ').join('-');
		return <li className="work-list__project" id={ id } onClick={ this.handleClick }>{ this.props.project }</li>;
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

		const hash = window.location.hash;

		return {
			project : null,
			hash    : hash
		}
	},

	componentDidMount: function() {
		
		if ( this.state.hash !== '' ) {

			const hashLen = this.state.hash.length;
			const project = decodeURIComponent(this.state.hash).toLowerCase().split(' ').join('-').substr(1, hashLen);
			const link    = document.querySelector(`#${project}`)
			
			link.click();
		}
	},

	handleClick: function(index) {
		this.setState({ project : index });
	},

	projectClosed: function() {
		this.setState({ project : null });
	},

	render: function() {

		let project = '';

		if ( this.state.project !== null ) {
			project = <Project project={ work[this.state.project] } projectClosed={ this.projectClosed } />;
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