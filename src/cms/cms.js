import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import PortfolioPagePreview from './preview-templates/PortfolioPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('portfolio', PortfolioPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
