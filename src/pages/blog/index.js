import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import BlogRollArchive from '../../components/BlogRollArchive';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* eslint-disable-next-line */}
        <SEO title="Blog" />
        <div className="container mx-auto px-4">
          <div className="mt-12 text-center">
            <h1 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
              Latest Stories
            </h1>
          </div>
          <section className="mb-20">
            <BlogRollArchive />
          </section>
        </div>
      </Layout>
    );
  }
}
