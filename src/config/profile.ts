import type { Profile } from '../types'
import photo from '../assets/profile.png'

/** Everything shown on the site lives in this file.
 *  Empty strings are treated as "not set": the item is hidden on the live site
 *  and shown as a dashed placeholder while you run `npm run dev`.
 *
 *  @note Only the profile header is allowed here.
 *  Do not add skills, projects, education, CV, contact forms, etc.
 *
 *  @todo Add your real account URLs (e.g. facebook: 'https://facebook.com/...').
 *  Platforms with an empty url are hidden.
 *
 *  @note photo is a generated letterhead asset, not the original portrait.
 *        Re-import src/assets/profile_square.png (a portrait square crop)
 *        and point photo here if you want to keep using the original photo.
 */
export const profile: Profile = {
  name: 'Reaksmey SAN',
  firstName: 'Reaksmey',
  lastName: 'SAN',
  title: 'Web Developer | UI/UX Designer',
  city: 'Phnom Penh',
  country: 'Cambodia',
  /** Path in /public or a full image URL. */
  photo,
  /** 
   * Portrait: young male, short dark curtain-style hair parted down the middle,
   * thin mustache, brown eyes, neutral expression, crisp white collared dress
   * shirt under a black suit jacket (blazer), arms crossed in front of the chest.
   */
  /** Short bio shown under the name. */
  intro: 'Web Developer | UI/UX Designer. Based in Phnom Penh, Cambodia.',
  /** Your deployed URL. Used for the QR code and the "copy link" button.
   *  Set this after the first Vercel deploy, e.g. 'https://your-site.vercel.app'.
   */
  siteUrl: 'https://reaksmey-san-personal-profile-neon.vercel.app/',

  // Social links ---------------------------------
  social: {
    facebook: 'https://www.facebook.com/share/1DsuUHGMBJ/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@smey_quality27',
    youtube: 'https://youtube.com/@smeyquality27?si=wqbY9hgMVClPOeqQ',
    telegram: '',
    linkedin: 'https://www.linkedin.com/in/reaksmey-san-354472399/',
    github: 'https://github.com/reaksmey27',
    portfolio: 'https://smey-dev.site',
  },
}
