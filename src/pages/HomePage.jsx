import React from 'react';
import Hero from '../componenets/Hero';
import HomeCards from '../componenets/HomeCards';
import JobListings from '../componenets/JobListings';
import ViewAllJobs from '../componenets/ViewAllJobs';
const HomePage = () => {
	return (
		<>
			<Hero />
			<HomeCards />
			<JobListings isHome={true} />
			<ViewAllJobs />
		</>
	);
};

export default HomePage;
