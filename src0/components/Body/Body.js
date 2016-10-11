
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Body.css';
import About from '../About';

function Body() {
  return (
    <div className={s.root}>
      <Image  src="" />
      <About />
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkth.d.naringsliv%2F&tabs=timeline&width=300&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="300"
        height="800"
        scrolling="no"
        frameborder="0"
        allowTransparency="true">
      </iframe>
    </div>
  );
}

export default withStyles(s)(Body);
