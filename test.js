
const {By, Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {crossOffMovie, deleteMovie, addMovie} = require('./functions')


beforeAll(async () => {
    await driver.get('http://localhost:5503/movieList/index.html')
})
afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(2000)
})

test('Cross off a Movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(2000)
})

test('Delete a movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(1000)
})