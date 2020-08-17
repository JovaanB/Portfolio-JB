import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../../Progress"

const SkillsProgress = () => (
  <div>
    <h2>Mes Compétences</h2>
    <div class="grid-container">
      <div>
        <img
          src="nodejs.png"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          alt="Logo nodejs"
        />
      </div>
      <div>
        <img
          src="javascript.png"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          alt="Logo javascript"
        />
      </div>
      <div>
        <img
          src="gatsby.png"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          alt="Logo gatsby"
        />
      </div>
      <div>
        <img
          src="api.png"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          alt="Logo api"
        />
      </div>
      <div>
        <img
          src="react.png"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          alt="Logo react"
        />
      </div>
      <div>
        <img
          src="git.png"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          alt="Logo git"
        />
      </div>
    </div>
  </div>
)

export default SkillsProgress
