import React from 'react';
import slugify from 'slugify';

const Features = (props) => {
      return (
        <div key={props.itemHash} className="feature__item">
          <input
            type="radio"
            id={props.itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={props.item.name === props.state.selected[props.feature].name}
            onChange={e => this.updateFeature(props.feature, props.item)}
          />
          <label htmlFor={props.itemHash} className="feature__label">
            {props.item.name} ({(props.USCurrencyFormat).format(props.item.cost)})
          </label>
        </div>
      );

//    return (
//      <fieldset className="feature" key={featureHash}>
//        <legend className="feature__name">
//          <h3>{feature}</h3>
//        </legend>
//        {options}
//      </fieldset>
//    );
};

export default Features;