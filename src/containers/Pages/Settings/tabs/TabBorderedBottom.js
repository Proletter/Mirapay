import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import Tabs from './Tabs';

const JustifyTabsBorderedBottom = () => {
  const { t } = useTranslation('common');

  return (
    <Col >
      <Card>
  
        <CardBody>
          {/* <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.tabs.justify_tabs_bordered_bottom')}</h5>
            <h5 className="subhead">Use default tabs with classes
              <span className="red-text"> tabs--justify tabs--bordered-bottom</span>
            </h5>
          </div> */}
          <div className="tabs tabs--justify tabs--bordered-bottom">
          
            <Tabs />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyTabsBorderedBottom;


// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import {
//   Card, CardBody, Col,
// } from 'reactstrap';
// import Tabs from './Tabs';

// const DefaultTabs = () => {
//   const { t } = useTranslation('common');

//   return (
//     <Col xs={12} md={12} lg={12} xl={6}>
//       <Card>
//         <CardBody>
//           <div className="card__title">
//             <h5 className="bold-text">{t('ui_elements.tabs.default_tabs')}</h5>
//             <h5 className="subhead">Use default tabs</h5>
//           </div>
//           <div className="tabs">
//             <Tabs />
//           </div>
//         </CardBody>
//       </Card>
//     </Col>
//   );
// };

// export default DefaultTabs;

