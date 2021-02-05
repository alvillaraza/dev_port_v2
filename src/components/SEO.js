import React from 'react';
import Helmet from 'react-helmet';

const SEO = () => {
    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
            meta={[
                {
                    property: 'og:image',
                    content: '../assets/alexis-villaraza-portrait.jpg',
                },
            ]}
        />
    )
};
export default SEO;