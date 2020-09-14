import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="defaultHero">
                <Banner title="404" subtitle="Page not found">
                    <Link to="/" className="btn-primary">
                        Return home
                    </Link>
                </Banner>
            </div>
    );
};

export default Error;