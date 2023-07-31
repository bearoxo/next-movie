export const icons = {
	search: { path: '/img/search-button.svg', alt: 'Search icon' },
	profile: { path: '/img/profile.png', alt: 'Profile button' },
	location: { path: '/img/location.svg', alt: 'Location icon' },
	mail: { path: '/img/mail.svg', alt: 'Mail icon' },
	phone: { path: '/img/phone.svg', alt: 'Phone icon' },
	duration: { path: '/img/duration.svg', alt: 'Duration icon' },
	views: { path: '/img/views.svg', alt: 'Views icon' },
	newsletter_btn: { path: '/img/newsletter-button.svg', alt: 'Newsletter button' },
	play_btn: { path: '/img/play-button.svg', alt: 'Play button' },
	calendar: { path: '/img/calendar.svg', alt: 'Calendar icon' },
}

export const header = {
	menu: [
		{ id: '1', name: 'Home', link: '/' },
		{ id: '2', name: 'Movies', link: '/movies' },
		{ id: '3', name: 'TV Show', link: '/tv-show' },
		{ id: '4', name: 'Video', link: '/video' },
		{ id: '5', name: 'FAQ', link: '/faq' },
		{ id: '6', name: 'Pricing', link: '/pricing' },
		{ id: '7', name: 'Contact Us', link: '/contact-us' },
	],
	search: {
		id: '1', name: 'Search', link: '/search', icon: icons.search.path, alt: icons.search.alt
	},
	profile: {
		id: '1', name: 'Profile', link: '/profile', icon: icons.profile.path, alt: icons.profile.alt
	}
}

export const footer = {
	menu: [
		{
			id: '1',
			name: 'Product',
			links: [
				{ id: '11', name: 'Movies', link: '/movies' },
				{ id: '12', name: 'TV Show', link: '/tv-show' },
				{ id: '13', name: 'Videos', link: '/videos' },
			],
		},
		{
			id: '2',
			name: 'Media Group',
			links: [
				{ id: '21', name: 'Nice Studio', link: '/nice-studio' },
				{ id: '22', name: 'Nice News', link: '/nice-news' },
				{ id: '23', name: 'Nice TV', link: '/nice-tv' },
			],
		},
		{
			id: '3',
			name: 'Sitemap',
			links: [
				{ id: '31', name: 'About', link: '/about' },
				{ id: '32', name: 'Careers', link: '/careers' },
				{ id: '33', name: 'Press', link: '/press' },
			],
		}
	],
	contacts: [
		{ id: '1', icon: icons.location.path, text: '8819 Ohio St. South Gate, California 90280', alt: icons.location.alt },
		{ id: '2', icon: icons.mail.path, text: 'ourstudio@hello.com', alt: icons.mail.alt },
		{ id: '3', icon: icons.phone.path, text: '+271 386-647-3637', alt: icons.phone.alt },
	]
}

