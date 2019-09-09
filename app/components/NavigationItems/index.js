/**
 *
 * NavigationItems
 *
 * This component specifies how the navigation items are to be rendered
 * based on a simple JSON structure of navigation items.
 */

import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { AkNavigationItemGroup, AkNavigationItem } from 'components/MonkeyPatchedNavigation';

const LinkStyle = styled.span`
  a {
    text-decoration: none;
  }
`;

const NavigationItems = ({ sections, onActivate = null }) => (
  <div>
    {sections.map((section) => (
      <AkNavigationItemGroup title={section.title} key={section.title}>
        {section.children.map((child, index) => (
          <LinkStyle key={child.href}>
            <Link to={child.href} onClick={onActivate}>
              <AkNavigationItem
                text={section.numbered ? `${index + 1}) ${child.text}` : child.text}
              />
            </Link>
          </LinkStyle>
         ))}
      </AkNavigationItemGroup>
     ))}
  </div>
);

NavigationItems.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
  })),
  onActivate: PropTypes.func,
};

export default NavigationItems;
