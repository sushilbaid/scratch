import React from 'react';
import PropTypes from 'prop-types';

export const data = [
    {
      isFolder: true,
      name: "public",
      children: [
        {
          isFolder: false,
          name: "index.html"
        }
      ]
    },
    {
      isFolder: true,
      name: "src",
      children: [
        {
          isFolder: true,
          name: "components",
          children: [
            {
              isFolder: true,
              name: "home",
              children: [
                {
                  isFolder: false,
                  name: "Home.js"
                }
              ]
            }
          ]
        },
        {
          isFolder: false,
          name: "App.js"
        }
      ]
    }
  ];
  
class RecipeSummary extends React.Component {
    static propTypes = {
        ingredients: PropTypes.number.isRequired,
        steps: PropTypes.number.isRequired,
        title: PropTypes.string,
    }

    static defaultProps = {
        ingredients: 5,
        steps: 5,
        title: "[untitled recipe]"
    }

    render() {
        return <div>
            {[...Array(data)].map((n, i) => 
                    <button key={i}>{n.name}</button>
                )}
        </div>
    }
}

export default RecipeSummary;
