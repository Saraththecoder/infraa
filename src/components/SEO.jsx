import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  url, 
  image = 'https://akgroupinfra.com/logo.png',
  type = 'website'
}) => {
  const siteName = "AK Group | Premium Real Estate & Home Interiors";
  const defaultDescription = "AK Group (Ashwin and Kiran Infra Developers) provides premium real estate development, plotted layouts, and high-end modular home interior solutions in Hyderabad and Andhra Pradesh.";
  
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url ? `https://akgroupinfra.com${url}` : 'https://akgroupinfra.com'} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url ? `https://akgroupinfra.com${url}` : 'https://akgroupinfra.com'} />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url ? `https://akgroupinfra.com${url}` : 'https://akgroupinfra.com'} />
    </Helmet>
  );
};

export default SEO;
