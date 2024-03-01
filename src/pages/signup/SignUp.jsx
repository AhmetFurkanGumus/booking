import React from 'react';
import styles from '../signup/SignUp.module.css';

const SignUp = () => {
  return (
    <div>
      <section className={styles['w3l-login-6']}>
        <div className={styles['login-hny']}>
          <div className={styles['form-content']}>
            <div className={styles['form-right']}>
              <div className={styles['overlay']}>
                <div className={styles['grid-info-form']}>
                  <h5>Hoşgeldin</h5>
                  <h3>Bize Katıl</h3>
                  <p>BookStore uygulamasında yeni ürünlerin bildirimlerini almak ve size özel kampanyalardan yararlanmak için hemen bize katıl</p>
                  <a href="/login" className={`${styles['read-more-1']} btn`}>Hesabın Var Mı?</a>
                </div>
              </div>
            </div>
            <div className={styles['form-left']}>
              <div className={styles['middle']}>
                <h4>BİZE KATIL</h4>
                <p>Hemen Ücretsiz Hesabını Oluştur</p>
              </div>
              <form action="#" method="post" className={styles['signin-form']}>
                <div className={`${styles['form-input']}`}>
                  <label>Adınız</label>
                  <input type="text" name placeholder required />
                </div>
                <div className={`${styles['form-input']}`}>
                  <label>Soyadınız</label>
                  <input type="text" name placeholder required />
                </div>
                <div className={`${styles['form-input']}`}>
                  <label>Kullanıcı Adınız</label>
                  <input type="text" name placeholder required />
                </div>
                <div className={`${styles['form-input']}`}>
                  <label>Email</label>
                  <input type="email" name placeholder required />
                </div>
                <div className={`${styles['form-input']}`}>
                  <label>Şifre</label>
                  <input type="password" name placeholder required />
                </div>
                <div className={`${styles['form-input']}`}>
                  <label>Şifre Tekrar</label>
                  <input type='password' name placeholder required />
                </div>
                <label className={styles['container']}>Tüm <a href="#" className={`${styles['text']} ${styles['text-blue-800']}`}>Şartları</a> Kabul Ediyorum.<a href="#" className={styles['text']}>Privacy</a>
                  <input type="checkbox" />
                  <span className={styles['checkmark']} />
                </label>
                <button className={`${styles['btn']}`}>Hesabımı Oluştur</button>
              </form>
              <div className={styles['copy-right']}>
                <p>© 2024 BookStore.Tüm Hakları Saklıdır| Design by Furkan Gümüş & Kübra Tutal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
