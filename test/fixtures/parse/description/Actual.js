import React from 'react';
import { props, t } from '../../../../.';

/**
 * component description
 */

@props({
  name: t.String
})
export default class Component extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
