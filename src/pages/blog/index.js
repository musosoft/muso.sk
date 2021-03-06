import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="mt-12 text-center">
          <h1 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
            Latest Stories
          </h1>
        </div>
        <section className="mb-20">
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
