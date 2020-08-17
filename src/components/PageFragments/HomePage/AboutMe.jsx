import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"
import { stripTags, domHtml } from "../../../utils/stripTags"

import SEO from "../../Seo"

const pageText = {
  paraOne: `Bonjour, Je m'appelle Jovan Bienvenu. Je suis un développeur (front/back) qui est passionné par les différentes technologies du web. J'aime créer et me challenger. J'ai une expérience de presque 2 ans. Construire des interfaces utilisateur sophistiquées, comme celle-ci, c'est ce que j'aime faire. Je vous invite à consulter le site pour en savoir un peu plus sur moi et lire mes articles de blog.`,
  paraTwo: `Actuellement, je travaille surtout avec des technologies Javascript comme ReactJS et NodeJS. J'ai également une expérience pratique sur MongoDB, GraphQL, Apollo, Git... J'aime m'instruire et apprendre de nouvelles compétences !`,
}

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            "Jovan",
            "Bienvenu",
            "Monteiro",
            "FullStack developer",
            "Javascript",
            "ReactJS",
            "NodeJS",
            "Gatsby",
          ]}
        />
        <h1 className="titleSeparate">À PROPOS</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Je vis pas loin de"
            textH3="Lille (59), France"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Une belle histoire"
            textH3="Café + moi = ❤️"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="J'aime le"
            textH3="travail en équipe"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="boxing.png"
            alt="boxing gloves image"
            textH4="Boxe française"
            textH3="Champion de France 2019"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="J'adore me former sur"
            textH3="Udemy - Medium, Dev.to..."
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Diplômé d'un"
            textH3="BTS SIO option SLAM"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  )
}
export default AboutMe
