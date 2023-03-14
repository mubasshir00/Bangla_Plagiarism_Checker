import React from 'react'
import Table from 'react-bootstrap/Table';
import './show_details.css'
const DetailsView = ( details_view ) => {
    console.log(details_view.details_view);
  return (
    <div>
      <table className="fujita-table">
        <caption></caption>
        <colgroup></colgroup>
        <colgroup span="2"></colgroup>
        <colgroup></colgroup>
        <thead>
          <tr>
            <th scope="col" rowspan="2">
              similarity_percentage
            </th>
            <th scope="col" rowspan="2">
              Source
            </th>
            <th scope="col" rowspan="2">
              Source Link
            </th>
            <th scope="col" rowspan="2">
              Article
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td data-th="Rating" className="scale_0" title="Light damage">
              0
            </td>
            <td data-th="F-Scale">&lt;&thinsp;73</td>
            <td data-th="EF-Scale">65&mdash;85</td>
            <td data-th="Typical Damage">
              <a
                href="http://www.spc.noaa.gov/faq/tornado/f0.jpg"
                target="_blank"
                title="View example of light damage. [External link]"
              >
                Light damage
              </a>
              &mdash;&thinsp;Some damage to chimneys; branches broken off trees;
              shallow-rooted trees pushed over; sign boards damaged.
            </td>
          </tr> */}
          {details_view.details_view.map(i => {
            let tempArticle = i.givenSentence
            return (
              <tr>
                <td>{i.similarity_percentage}%</td>
                <td>{i.Source}</td>
                <td>{i.Source_link}</td>
                <td>{tempArticle.slice(0, 30).trim()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsView