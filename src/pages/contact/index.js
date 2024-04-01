import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Tab } from '@headlessui/react';
import contact from '../../../static/img/contact.svg';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        {/* eslint-disable-next-line */}
        <SEO title="Contact" />
        <section className="section">
          <div className="max-w-screen-xl my-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Lets talk about everything!
                </h2>
                <div className="text-gray-700 mt-8">Don't be shy.</div>
              </div>
              <div className="mt-8 text-center">
                <img
                  className="h-full w-auto text-dodgerBlue-500"
                  src={contact}
                  alt=""
                />
              </div>
            </div>
            <div>
              <Tab.Group>
                <Tab.List className="-mb-px flex space-x-8">
                  <Tab className="group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Email
                  </Tab>
                  {/* <Tab className="group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Facebook
                  </Tab>
                  <Tab className="group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Messenger
                  </Tab> */}
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don’t fill this out:
                          <input
                            name="bot-field"
                            onChange={this.handleChange}
                          />
                        </label>
                      </div>
                      <div>
                        <label
                          className="uppercase text-sm text-gray-600 font-bold"
                          htmlFor="name"
                        >
                          Your name
                        </label>
                        <input
                          className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                          type="text"
                          name="name"
                          onChange={this.handleChange}
                          id="name"
                          required={true}
                        />
                      </div>
                      <div className="mt-8">
                        <label
                          className="uppercase text-sm text-gray-600 font-bold"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                          type="email"
                          name="email"
                          onChange={this.handleChange}
                          id="email"
                          required={true}
                        />
                      </div>
                      <div className="mt-8">
                        <label
                          className="uppercase text-sm text-gray-600 font-bold"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          className="w-full h-32 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                          name="message"
                          onChange={this.handleChange}
                          id="message"
                          required={true}
                        ></textarea>
                      </div>
                      <div className="mt-8">
                        <button
                          className="uppercase text-sm font-bold tracking-wide bg-dodgerBlue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </Tab.Panel>
                  {/* <Tab.Panel>Content 2</Tab.Panel>
                  <Tab.Panel>Content 3</Tab.Panel> */}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
