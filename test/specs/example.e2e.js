import SongPage from '../pageobjects/song.page'

describe('Song page test', () => {
    it('should be display play button', async () => {
        await SongPage.open();
        expect (await SongPage.existsBtn()).toBe(true);
    });
    it('should click on play button', async () => {
        expect (await SongPage.clickOnPlay()).toBe(true);
    });
    it('should be display dropdown', async () => {
        expect (await SongPage.openDropDown()).toBe(true);
    });
    it('should be at least one item on the DSP list ', async () => {
        expect (await SongPage.check_service_list()).toBe(true);
    });
});


