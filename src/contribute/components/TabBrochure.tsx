import React from "react";

export const TabBrochure: React.FC = () => {
    return (
        <div className="contributeTab">
            <h3>React Brochure Websites</h3>
            <p>The brochure sites that provide an overview of the various offerings are created in React, however they are mostly static HTML and CSS, making them fairly easy for even those without experience in React to work on.</p>

            <ul className="checkList">
                <li><a href="https://github.com/LiveChurchSolutions/ChurchAppsWeb" target="_blank" rel="external">ChurchAppsWeb</a> - The brochure site hosted at <a href="https://churchapps.org/" target="_blank" rel="external">https://churchapps.org/</a></li>
                <li><a href="https://github.com/LiveChurchSolutions/ChumsWeb" target="_blank" rel="external">ChumsWeb</a> - The brochure site hosted at <a href="https://chums.org/" target="_blank" rel="external">https://chums.org/</a></li>
                <li><a href="https://github.com/LiveChurchSolutions/StreamingLiveWeb" target="_blank" rel="external">StreamingLiveWeb</a> - The brochure site hosted at <a href="https://streaminglive.church/" target="_blank" rel="external">https://streaminglive.church/</a></li>
                <li><a href="https://github.com/LiveChurchSolutions/B1Web" target="_blank" rel="external">B1Web</a> - The brochure site hosted at <a href="https://b1.church/" target="_blank" rel="external">https://b1.church/</a></li>
            </ul>
        </div>
    );
}
