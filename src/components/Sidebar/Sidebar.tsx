// import './Sidebar.css';

import '@spectrum-web-components/icons-workflow/icons/sp-icon-comment.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-paste.js';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <sp-icon-paste size="l"></sp-icon-paste>
            <sp-icon-comment size="l"></sp-icon-comment>
        </div>
    );
}