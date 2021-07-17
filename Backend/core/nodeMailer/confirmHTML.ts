export const CreateConfirmHTML = (hash: string) => {
  return (`<div><p>Для того, чтобы подтвердить почту, перейдите 
  <a href="${(process.env.NODE_ENV === 'development') ? process.env.LOCALBASEURL : process.env.PRODBASEURL}
     /users/verify?hash=${hash}">по ссылке</a></p></div>`)
};
//! <a> link does not work with mailtrap testing servce