import React from "react";

const ProjectContext = React.createContext({
    appName: '',
    appDescription: '',
    appGithubRepo: '',
    appLink: ''
});

export default ProjectContext;