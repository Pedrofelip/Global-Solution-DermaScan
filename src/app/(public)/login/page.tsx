import styles from './login.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
    
    return (
        <main className={styles.main}>
            <div className={styles.fundo_login}>
                <div className={styles.fundo_lado_logo}>
                    <Image
                        src="/logo_sem_fundo.png"
                        alt="Logo da solução Derma Scan com um coração com o nome da solução em baixo"
                        // className={styles.vercelLogo}
                        width={750}
                        height={690}
                        priority
                    />
                </div>
                <div className={styles.fundo_lado_form}>
                    <div className={styles.grid_form}>
                        <form action="" className={styles.form_login}>
                            <h2>Login</h2>
                            <div className={styles.input_login}>
                                <label htmlFor="">Email</label>
                                <input type="email" />
                            </div>
                            <div className={styles.input_login}>
                                <label htmlFor="">Senha</label>
                                <input type="password" />
                            </div>
                            <p className={styles.redirect}>não possui cadastro? <Link href="/cadastro" className={styles.link_redirect}>cadastre-se</Link></p>
                            <div className={styles.btn_login}>
                                <button>entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}