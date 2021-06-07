import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SongPage extends Page {
    /**
     * define selectors using getter methods
     */
    get playBtn () { return $('linkfire-button') }
    get title () { return $('.cnt-head_title h1') }
    get service_list () { return $$('.service-list__item') }

    async check_service_list() {
        return (await this.service_list).length != 0 ? true : false;
    }

    async existsBtn() {
        return await (await this.playBtn).isDisplayed();
    }

    async clickOnPlay() {
       return await (await this.playBtn).isClickable();
    }
    async openDropDown() {
        await (await this.playBtn).click();
        return await (await $('.dropdown-active')).isDisplayed();
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('https://www.letras.com/lil-nas-x/montero-call-me-by-your-name/');
    }
}

export default new SongPage();
