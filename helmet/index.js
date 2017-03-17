import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import webConfig from "./default.web.config";

class HelmetComponent extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string,
    baseUrl: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    imageWidth: PropTypes.string,
    imageHeight: PropTypes.string,
    facebookAppId: PropTypes.string,
    twitterId: PropTypes.string,
    type: PropTypes.string,
    typeExtras: PropTypes.array
  };

  static defaultProps = {
    title: this.props.title ? this.props.title : webConfig.website_title,
    baseUrl: webConfig.website_baseurl,
    url: webConfig.website_baseurl,
    description: webConfig.website_description,
    imageWidth: webConfig.social_image_width,
    imageHeight: webConfig.social_image_height,
    facebookAppId: webConfig.facebook_application_id,
    twitterId: `@${webConfig.twitter_page}`,
    type: "website",
    typeExtras: []
  };

  render() {
    const meta = this.getMetas(this.props.title);

    return (
      <Helmet
        title={this.props.title}
        meta={meta}
        htmlAttributes={{"lang": "nl", "amp": undefined}} // amp takes no value
        titleTemplate={this.props.title}
        defaultTitle={this.props.title}
        base={{"target": "_blank", "href": "/"}}
        link={[
          {"rel": "apple-touch-icon", "href": "/assets/fav/apple-touch-icon-57x57.png"},
          {"rel": "apple-touch-icon", "sizes": "72x72", "href": "/assets/fav/apple-touch-icon-72x72.png"},
          {"rel": "shortcut icon", "href": "/assets/fav/favicon.png", "type":"image/x-icon"},
          {"rel": "apple-touch-icon", "sizes": "57x57", "href": "/assets/fav/apple-touch-icon-57x57.png"},
          {"rel": "apple-touch-icon", "sizes": "60x60", "href": "/assets/fav/apple-touch-icon-60x60.png"},
          {"rel": "apple-touch-icon", "sizes": "72x72", "href": "/assets/fav/apple-touch-icon-72x72.png"},
          {"rel": "apple-touch-icon", "sizes": "76x76", "href": "/assets/fav/apple-touch-icon-76x76.png"},
          {"rel": "apple-touch-icon", "sizes": "114x114", "href": "/assets/fav/apple-touch-icon-114x114.png"},
          {"rel": "apple-touch-icon", "sizes": "120x120", "href": "/assets/fav/apple-touch-icon-120x120.png"},
          {"rel": "apple-touch-icon", "sizes": "144x144", "href": "/assets/fav/apple-touch-icon-144x144.png"},
          {"rel": "apple-touch-icon", "sizes": "152x152", "href": "/assets/fav/apple-touch-icon-152x152.png"},
          {"rel": "apple-touch-icon", "sizes": "180x180", "href": "//assets/fav/apple-touch-icon-180x180.png"},
          {"rel": "icon", "type": "image/png", "href": "/assets/fav/favicon-16x16.png", "sizes": "16x16"},
          {"rel": "icon", "type": "image/png", "href": "/assets/fav/favicon-32x32.png", "sizes": "32x32"},
          {"rel": "icon", "type": "image/png", "href": "/assets/fav/favicon-96x96.png", "sizes": "96x96"},
          {"rel": "icon", "type": "image/png", "href": "/assets/fav/android-chrome-192x192.png", "sizes": "192x192"}
        ]}
        script={[
          {"type": "application/ld+json", "innerHTML": `{ "@context": "http://schema.org" }`}
        ]}
      />
    );
  }

  /**
   * function that gets the meta data of the website
   * @param pageTitle
   * @returns {array}
   */
  getMetas (pageTitle) {
    let meta = [
      {"property": "description", "content": String(this.props.description).substring(0, 155)},

      {"property": "og:locale", "content": "nl_NL"},
      {"property": "og:site_name", "content": pageTitle},
      {"property": "og:title", "content": pageTitle},
      {"property": "og:url", "content": this.props.url},
      {"property": "og:type", "content": this.props.type},
      {"property": "og:description", "content": this.props.description},
      {"property": "og:image", "content": "/assets/fav/img/social-image.png"},
      {"property": "og:image:width", "content": this.props.imageWidth},
      {"property": "og:image:height", "content": this.props.imageHeight},
      {"property": "og:image:secure_url", "content": "/assets/fav/img/social-image.png"},
      {"property": "fb:app_id", "content": this.props.facebookAppId},

      {"name": "twitter:title", "content": pageTitle},
      {"name": "twitter:site", "content": this.props.twitterId},
      {"name": "twitter:creator", "content": this.props.twitterId},
      {"name": "twitter:description", "content": this.props.description},
      {"name": "twitter:image", "content": "/assets/fav/img/social-image.png"},
      {"name": "twitter:card", "content": "summary_large_image"},
      {"name": "twitter:domain", "content": this.props.baseUrl},

      {"name": "theme-color", "content": webConfig.website_theme_color},
      {"name": "msapplication-navbutton-color", "content": webConfig.website_theme_color},
      {"name": "apple-mobile-web-app-status-bar-style", "content": webConfig.website_theme_color},

      {"name": "viewport", "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}
    ];

    if (this.props.typeExtras && this.props.typeExtras.length > 0) {
      for (let indexExtraMeta = 0; indexExtraMeta < this.props.typeExtras.length; indexExtraMeta++) {
        meta.push(this.props.typeExtras[indexExtraMeta]);
      }
    }

    return meta;
  }

}

export default HelmetComponent;