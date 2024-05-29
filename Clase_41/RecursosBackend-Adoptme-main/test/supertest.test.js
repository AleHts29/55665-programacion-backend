import chai from 'chai';
import supertest from 'supertest';
import mongoose from 'mongoose';


const expect = chai.expect
const requester = supertest('http://localhost:8080')

mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`);


describe('Testing Pets App', () => {
    // before


    /*=============================================
    =                   Section 01                =
    =============================================*/
    describe("Testing Pets Api", () => {
        // before

        // it 01
        it("Crear Mascota: El API POST /api/pets debe crear una nueva mascota correctamente", async () => {
            // Given 
            const petMock = {
                name: "Patitas",
                specie: "pez",
                birthDate: "10-10-2022"
            };

            // Then
            const { statusCode, _body } = await requester.post('/api/pets').send(petMock)
            // console.log(result);


            // Assert
            expect(statusCode).is.eqls(201)
            expect(_body.payload).is.ok.and.to.have.property('_id')
        })

        // it 02
        it("Crear Mascota sin nombre: El API POST /api/pets debe retornar un estado HTTP 400 con error.", async () => {
            // Given 
            const petMock = {
                specie: "pez",
                birthDate: "10-10-2022"
            };

            // Then
            const { statusCode, _body } = await requester.post('/api/pets').send(petMock)
            // console.log(result);


            // Assert
            expect(statusCode).is.eqls(400)
            expect(_body).is.ok.and.to.have.property('error')
        })


        // Test 03
        it("Crear mascota con Avatar (Test con uploads): Debe poder crearse una mascota con la ruta de la imagen.", async () => {
            // Given
            const petMock = {
                name: "Orejitas",
                specie: "cat",
                birthDate: "10-11-2022"
            };


            // Then
            const result = await requester.post("/api/pets/withimage")
                .field('name', petMock.name)
                .field('specie', petMock.specie)
                .field('birthDate', petMock.birthDate)
                .attach('image', './test/files/coderDog.jpg');


            // Assert
            expect(result.statusCode).to.eql(200)
            expect(result._body.payload.image).to.be.ok
        });



    })


    // it



    /*=============================================
    =                   Section 02                =
    =============================================*/
    describe("Testing login and session with Cookies:", () => {


        before(function () {
            this.cookie;
            this.mockUser = {
                first_name: "Usuario de prueba 2",
                last_name: "Apellido de prueba 2",
                email: "correodeprueba_02@gmail.com",
                password: "123456"
            };
        });



        // Test 01
        it("Test Registro Usuario: Debe poder registrar correctamente un usuario", async function () {
            //Given:
            // console.log(this.mockUser);

            //Then: 
            const {
                statusCode,
                ok,
                _body
            } = await requester.post('/api/sessions/register').send(this.mockUser);
            // console.log(statusCode);
            // console.log(_body);

            //Assert that:
            expect(statusCode).is.equal(200);

        });



        // Test 02
        it("Test Login Usuario: Debe poder hacer login correctamente con el usuario registrado previamente.", async function () {
            //Given:
            const mockLogin = {
                email: this.mockUser.email,
                password: this.mockUser.password,
            }

            //Then: 
            const result = await requester.post('/api/sessions/login').send(mockLogin)
            // console.log(result);

            const cookieResult = result.header['set-cookie'][0]
            const cookieData = cookieResult.split('=')
            this.cookie = {
                name: cookieData[0],
                value: cookieData[1]
            }

            //Assert that:
            expect(this.cookie.name).is.ok.and.eql('coderCookie')
            expect(this.cookie.value).is.ok

        });

        // Test 03
        it("Test Ruta Protegida: Debe enviar la cookie que contiene el usuario y destructurarla correctamente.", async function () {

            // given


            // Then
            const { _body } = await requester.get('/api/sessions/current').set('Cookie', [`${this.cookie.name}=${this.cookie.value}`])
            // console.log(_body);


            // Assert
            expect(_body.payload.email).to.be.ok.and.eql(this.mockUser.email);

        })


    });

})
