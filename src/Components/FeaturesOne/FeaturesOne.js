import React from 'react';
import Progress from '../Dashboard/Progress/Progress';
import Facility from '../Facility/Facility';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HelpCenter from '../HelpCenter/HelpCenter';
import Sidebar from '../Sidebar/Sidebar';
import TopPagination from '../TopPagination/TopPagination';
import FeaturesOneForm from './FeaturesOneForm';

const FeaturesOne = () => {
    return (
        <section>
            <Header></Header>
            <div className="container-fluid row m-0 p-0">
                <div className="col-lg-2 m-0 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-1g-10 ml-lg-4">
                    <Facility></Facility>
                    <TopPagination></TopPagination>
                    <FeaturesOneForm></FeaturesOneForm>
                    <Progress></Progress>
                    <Footer></Footer>
                </div>
                <div className="col-lg-2 ml-lg-5  p-0">
                    <HelpCenter></HelpCenter>
                </div>
            </div>
            
        </section>
    );
};

export default FeaturesOne;