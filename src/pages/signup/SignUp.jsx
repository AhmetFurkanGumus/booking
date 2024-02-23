import React from 'react'
import '../signup/style.css'

const SignUp = () => {
  return (
    <div>
        <section className="w3l-login-6">
        <div className="login-hny">
          <div className="form-content">
            <div className="form-right">
              <div className="overlay">
                <div className="grid-info-form">
                  <h5>Hoşgeldin</h5>
                  <h3>Bize Katıl</h3>
                  <p>BookStore uygulamasında yeni ürünlerin bildirimlerini almak ve size özel kampanyalardan yararlanmak için hemen bize katıl</p>
                  <a href="/login" className="read-more-1 btn">Hesabın Var Mı?</a>
                </div>
              </div>
            </div>
            <div className="form-left">
              <div className="middle">
                <h4>BİZE KATIL</h4>
                <p>Hemen Ücretsiz Hesabını Oluştur</p>
              </div>
              <form action="#" method="post" className="signin-form">
                <div className="form-input">
                  <label>Adınız</label>
                  <input type="text" name placeholder required />
                </div>
                <div className="form-input">
                  <label>Soyadınız</label>
                  <input type="text" name placeholder required />
                </div>
                <div className="form-input">
                  <label>Kullanıcı Adınız</label>
                  <input type="text" name placeholder required />
                </div>
                <div className="form-input">
                  <label>Email</label>
                  <input type="email" name placeholder required />
                </div>
                <div className="form-input">
                  <label>Şifre</label>
                  <input type="password" name placeholder required />
                </div>
                <div className="form-input">
                  <label>Şifre Tekrar</label>
                  <input type='password' name placeholder required />
                </div>
                <label className="container">Tüm <a href="#" className='text text-blue-800'>Şartları</a> Kabul Ediyorum.<a href="#">Privacy</a>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <button className="btn">Hesabımı Oluştur</button>
              </form>
              <div className="copy-right text-center">
                <p>© 2024 BookStore.Tüm Hakları Saklıdır| Design by Furkan Gümüş & Kübra Tutal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp