type SEOType = {
  title?: string;
  description?: string;
  keywords?: string[];
  robots?: string[];
  og?: {
    siteName?: string;
    title?: string;
    description?: string;
    url?: string;
  };
  canonical?: string;
};

export default SEOType;
