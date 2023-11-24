import styles from './page.module.css'
import Header from '../components/header/Header'
import Link from 'next/link'
import Card from '../components/card/Card'
import Footer from '../components/footer/footer'
import imgCard from '../../../public/assertividade.jpg'
import imgCard2 from '../../../public/medicoPc.png'
import imgCard3 from '../../../public/praticidade.jpg'
import imgCard4 from '../../../public/privacidade.jpg'

export default function Home() {
  return (
    <main>
      <Header></Header>
      <section className={styles.section1}>
        <div className={styles.grid_section1}>
          <div className={styles.img_section1}> </div>
          <div className={styles.grid_txt_section1}>
            <h2>Derma scan</h2>
            <p>O Derma Scan é uma inovadora solução de saúde que utiliza inteligência artificial avançada para a detecção precoce de câncer de pele. Diante do desafio de moldar o futuro da saúde, nosso projeto se destaca ao integrar tecnologias emergentes, como análise de dados, inteligência artificial e automação, para promover a prevenção eficaz, tornar a assistência médica mais acessível e proporcionar diagnósticos precisos.</p>

            <p className={styles.segundoP}>Para testar cadastre-se ou faça login nos botões a baixo.</p>
            <div className={styles.grid_btns_section1}>
              <Link href='/login' className={styles.btn1_section1}>Login</Link>
              <Link href='/cadastro' className={styles.btn2_section1}>Cadastrar</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.grid_section2}>
          <h2>Sobre Nós</h2>
          <p>Seguindo a ideia do desafio proposto nessa Global Solution, tendo em vista as metas da ODS 3 e unindo ela à tecnologia resolvemos criar como solução o Derma Scan, que tem como pontos focal meta 3.4 visa reduzir em um terço a mortalidade prematura por doenças não transmissíveis até 2030, uma vez que o Derma Scan poderá ajudar as pessoas a identificarem um possível câncer de pele em seu início e com a descoberta precoce facilitar no tratamento, aumentar a chance de cura e diminuir o risco de morte.
            <br />
            <br />
            O Derma Scan é uma inovadora solução de saúde que utiliza inteligência artificial avançada para a detecção precoce de câncer de pele. Diante do desafio de moldar o futuro da saúde, nosso projeto se destaca ao integrar tecnologias emergentes, como análise de dados, inteligência artificial e automação, para promover a prevenção eficaz, tornar a assistência médica mais acessível e proporcionar diagnósticos precisos.</p>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.grid_section3}>
          <h2>Benefícios</h2>
          <div className={styles.grid_card}>
            <Card img={imgCard} titulo='assertividade' texto=''></Card>
            <Card img={imgCard2} titulo='tecnologia' texto=''></Card>
            <Card img={imgCard3} titulo='praticidade' texto=''></Card>
            <Card img={imgCard4} titulo='confiabilidade' texto=''></Card>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}
