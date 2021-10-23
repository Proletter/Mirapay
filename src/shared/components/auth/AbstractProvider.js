import firebase from 'firebase';

/**
 * You can add new providers here, like a twitter, oauth and other
 * @type {{FACEBOOK: string, LOCAL: string, GOOGLE: string}}
 */
export const providers = {
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  LOCAL: 'local',
};

export class AbstractProvider {
  providerName = '';

  provider = null;

  constructor(providerName) {
    this.providerName = providerName;
    this.provider = this.getProvider();
  }

  /**
   * Return provider
   * @returns
   * {firebase.auth.GoogleAuthProvider|firebase.auth.FacebookAuthProvider|null}
   */
  getProvider = () => {
    switch (this.providerName) {
      case providers.FACEBOOK:
        return new firebase.auth.FacebookAuthProvider();
      case providers.GOOGLE:
        return new firebase.auth.GoogleAuthProvider();
      default:
        return null;
    }
  }

  /**
   * Return InfoUser
   * @param data
   * @returns {{name: *}|{name: *, avatar: string}}
   */
  getUserObjectByProvider = (data) => {
    switch (this.providerName) {
      case providers.FACEBOOK:
      case providers.GOOGLE:
        return { name: data.user.displayName, avatar: data.user.photoURL };
      case providers.LOCAL:
        return { name: data.user.email };
      default:
        return { ...data };
    }
  }

  login = async (userProps = {}) => {
    if (this.provider) {
      return firebase.auth().signInWithPopup(this.provider);
    }
    const { username, password } = userProps;
    return firebase.auth().signInWithEmailAndPassword(username, password);
  }
}
