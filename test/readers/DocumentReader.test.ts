import { OpenAPIV3 } from 'openapi-types';
import { doc } from 'prettier';
import { DocumentReader } from '../../src/readers/DocumentReader';
import { TypeDocument } from '../../src/readers/types';
import document from '../files/petStore3.openapi.json' assert { type: 'json' };

test('DocumentReader', () => {
  const reader = new DocumentReader(document as unknown as OpenAPIV3.Document);
  const types = reader.read();
  // console.log(JSON.stringify(types));
  expect(types).toEqual<TypeDocument>({
    info: {
      title: 'Swagger Petstore - OpenAPI 3.0',
      description:
        "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!\nYou can now help us improve the API whether it's by making changes to the definition itself or to the code.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\nSome useful links:\n- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)",
      version: '1.0.17',
      baseURL: '/api/v3',
    },
    components: [
      {
        name: 'Address',
        required: false,
        kind: 'origin',
        type: 'object',
        children: [
          { example: 'Palo Alto', name: 'city', type: 'string', required: false, kind: 'origin' },
          { example: 'CA', name: 'state', type: 'string', required: false, kind: 'origin' },
          { example: '437 Lytton', name: 'street', type: 'string', required: false, kind: 'origin' },
          { example: '94301', name: 'zip', type: 'string', required: false, kind: 'origin' },
        ],
      },
      {
        name: 'ApiResponse',
        required: false,
        kind: 'origin',
        type: 'object',
        children: [
          { format: 'int32', name: 'code', type: 'number', required: false, kind: 'origin' },
          { name: 'message', type: 'string', required: false, kind: 'origin' },
          { name: 'type', type: 'string', required: false, kind: 'origin' },
        ],
      },
      {
        name: 'Category',
        required: false,
        kind: 'origin',
        type: 'object',
        children: [
          { example: 1, format: 'int64', name: 'id', type: 'number', required: false, kind: 'origin' },
          { example: 'Dogs', name: 'name', type: 'string', required: false, kind: 'origin' },
        ],
      },
      {
        name: 'Customer',
        required: false,
        kind: 'origin',
        type: 'object',
        children: [
          {
            name: 'address',
            required: false,
            kind: 'origin',
            type: 'array',
            children: [
              {
                kind: 'alias',
                root: false,
                name: 'address[]',
                ref: '#/components/schemas/Address',
                target: 'Address',
                origin: 'Address',
                props: [],
              },
            ],
          },
          { example: 100000, format: 'int64', name: 'id', type: 'number', required: false, kind: 'origin' },
          { example: 'fehguy', name: 'username', type: 'string', required: false, kind: 'origin' },
        ],
      },
      {
        name: 'Order',
        required: false,
        kind: 'origin',
        type: 'object',
        children: [
          { name: 'complete', type: 'boolean', required: false, kind: 'origin' },
          { example: 10, format: 'int64', name: 'id', type: 'number', required: false, kind: 'origin' },
          { example: 198772, format: 'int64', name: 'petId', type: 'number', required: false, kind: 'origin' },
          { example: 7, format: 'int32', name: 'quantity', type: 'number', required: false, kind: 'origin' },
          { format: 'date-time', name: 'shipDate', type: 'string', required: false, kind: 'origin' },
          {
            description: 'Order Status',
            example: 'approved',
            enum: ['placed', 'approved', 'delivered'],
            name: 'status',
            type: 'string',
            required: false,
            kind: 'origin',
          },
        ],
      },
      {
        name: 'Pet',
        required: false,
        kind: 'origin',
        type: 'object',
        children: [
          {
            kind: 'alias',
            root: false,
            name: 'category',
            ref: '#/components/schemas/Category',
            target: 'Category',
            origin: 'Category',
            props: [],
          },
          { example: 10, format: 'int64', name: 'id', type: 'number', required: false, kind: 'origin' },
          { example: 'doggie', name: 'name', type: 'string', required: true, kind: 'origin' },
          {
            name: 'photoUrls',
            required: true,
            kind: 'origin',
            type: 'array',
            children: [{ name: 'photoUrls[]', type: 'string', required: false, kind: 'origin' }],
          },
          {
            description: 'pet status in the store',
            enum: ['available', 'pending', 'sold'],
            name: 'status',
            type: 'string',
            required: false,
            kind: 'origin',
          },
          {
            name: 'tags',
            required: false,
            kind: 'origin',
            type: 'array',
            children: [
              {
                kind: 'alias',
                root: false,
                name: 'tags[]',
                ref: '#/components/schemas/Tag',
                target: 'Tag',
                origin: 'Tag',
                props: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Tag',
        required: false,
        kind: 'origin',
        type: 'object',
        children: [
          { format: 'int64', name: 'id', type: 'number', required: false, kind: 'origin' },
          { name: 'name', type: 'string', required: false, kind: 'origin' },
        ],
      },
      {
        name: 'User',
        required: false,
        kind: 'origin',
        type: 'object',
        children: [
          { example: 'john@email.com', name: 'email', type: 'string', required: false, kind: 'origin' },
          { example: 'John', name: 'firstName', type: 'string', required: false, kind: 'origin' },
          { example: 10, format: 'int64', name: 'id', type: 'number', required: false, kind: 'origin' },
          { example: 'James', name: 'lastName', type: 'string', required: false, kind: 'origin' },
          { example: '12345', name: 'password', type: 'string', required: false, kind: 'origin' },
          { example: '12345', name: 'phone', type: 'string', required: false, kind: 'origin' },
          { example: 'theUser', name: 'username', type: 'string', required: false, kind: 'origin' },
          {
            description: 'User Status',
            example: 1,
            format: 'int32',
            name: 'userStatus',
            type: 'number',
            required: false,
            kind: 'origin',
          },
        ],
      },
    ],
    paths: [
      {
        name: 'addPet',
        method: 'post',
        url: '/pet',
        title: 'Add a new pet to the store',
        description: 'Add a new pet to the store',
        request: {
          body: {
            kind: 'alias',
            root: false,
            name: 'AddPetReqData',
            ref: '#/components/schemas/Pet',
            target: 'Pet',
            origin: 'Pet',
            props: [],
          },
        },
        response: {
          body: {
            kind: 'alias',
            root: false,
            name: 'AddPetResData',
            ref: '#/components/schemas/Pet',
            target: 'Pet',
            origin: 'Pet',
            props: [],
          },
        },
      },
      {
        name: 'updatePet',
        method: 'put',
        url: '/pet',
        title: 'Update an existing pet',
        description: 'Update an existing pet by Id',
        request: {
          body: {
            kind: 'alias',
            root: false,
            name: 'UpdatePetReqData',
            ref: '#/components/schemas/Pet',
            target: 'Pet',
            origin: 'Pet',
            props: [],
          },
        },
        response: {
          body: {
            kind: 'alias',
            root: false,
            name: 'UpdatePetResData',
            ref: '#/components/schemas/Pet',
            target: 'Pet',
            origin: 'Pet',
            props: [],
          },
        },
      },
      {
        name: 'deletePet',
        method: 'delete',
        url: '/pet/{petId}',
        title: 'Deletes a pet',
        description: '',
        request: {
          path: {
            kind: 'origin',
            name: 'DeletePetReqPath',
            type: 'object',
            required: true,
            children: [
              {
                description: 'Pet id to delete',
                format: 'int64',
                name: 'petId',
                type: 'number',
                required: true,
                kind: 'origin',
              },
            ],
          },
          query: {
            kind: 'origin',
            name: 'DeletePetReqParams',
            type: 'object',
            required: false,
            children: [{ description: '', name: 'api_key', type: 'string', required: false, kind: 'origin' }],
          },
        },
        response: {},
      },
      {
        name: 'getPetById',
        method: 'get',
        url: '/pet/{petId}',
        title: 'Find pet by ID',
        description: 'Returns a single pet',
        request: {
          path: {
            kind: 'origin',
            name: 'GetPetByIdReqPath',
            type: 'object',
            required: true,
            children: [
              {
                description: 'ID of pet to return',
                format: 'int64',
                name: 'petId',
                type: 'number',
                required: true,
                kind: 'origin',
              },
            ],
          },
        },
        response: {
          body: {
            kind: 'alias',
            root: false,
            name: 'GetPetByIdResData',
            ref: '#/components/schemas/Pet',
            target: 'Pet',
            origin: 'Pet',
            props: [],
          },
        },
      },
      {
        name: 'updatePetWithForm',
        method: 'post',
        url: '/pet/{petId}',
        title: 'Updates a pet in the store with form data',
        description: '',
        request: {
          path: {
            kind: 'origin',
            name: 'UpdatePetWithFormReqPath',
            type: 'object',
            required: true,
            children: [
              {
                description: 'ID of pet that needs to be updated',
                format: 'int64',
                name: 'petId',
                type: 'number',
                required: true,
                kind: 'origin',
              },
            ],
          },
          query: {
            kind: 'origin',
            name: 'UpdatePetWithFormReqParams',
            type: 'object',
            required: false,
            children: [
              {
                description: 'Name of pet that needs to be updated',
                name: 'name',
                type: 'string',
                required: false,
                kind: 'origin',
              },
              {
                description: 'Status of pet that needs to be updated',
                name: 'status',
                type: 'string',
                required: false,
                kind: 'origin',
              },
            ],
          },
        },
        response: {},
      },
      {
        name: 'uploadFile',
        method: 'post',
        url: '/pet/{petId}/uploadImage',
        title: 'uploads an image',
        description: '',
        request: {
          path: {
            kind: 'origin',
            name: 'UploadFileReqPath',
            type: 'object',
            required: true,
            children: [
              {
                description: 'ID of pet to update',
                format: 'int64',
                name: 'petId',
                type: 'number',
                required: true,
                kind: 'origin',
              },
            ],
          },
          query: {
            kind: 'origin',
            name: 'UploadFileReqParams',
            type: 'object',
            required: false,
            children: [
              {
                description: 'Additional Metadata',
                name: 'additionalMetadata',
                type: 'string',
                required: false,
                kind: 'origin',
              },
            ],
          },
        },
        response: {
          body: {
            kind: 'alias',
            root: false,
            name: 'UploadFileResData',
            ref: '#/components/schemas/ApiResponse',
            target: 'ApiResponse',
            origin: 'ApiResponse',
            props: [],
          },
        },
      },
      {
        name: 'findPetsByStatus',
        method: 'get',
        url: '/pet/findByStatus',
        title: 'Finds Pets by status',
        description: 'Multiple status values can be provided with comma separated strings',
        request: {
          query: {
            kind: 'origin',
            name: 'FindPetsByStatusReqParams',
            type: 'object',
            required: false,
            children: [
              {
                default: 'available',
                description: 'Status values that need to be considered for filter',
                enum: ['available', 'pending', 'sold'],
                name: 'status',
                type: 'string',
                required: false,
                kind: 'origin',
              },
            ],
          },
        },
        response: {
          body: {
            name: 'FindPetsByStatusResData',
            required: false,
            kind: 'origin',
            type: 'array',
            children: [
              {
                kind: 'alias',
                root: false,
                name: 'FindPetsByStatusResData[]',
                ref: '#/components/schemas/Pet',
                target: 'Pet',
                origin: 'Pet',
                props: [],
              },
            ],
          },
        },
      },
      {
        name: 'findPetsByTags',
        method: 'get',
        url: '/pet/findByTags',
        title: 'Finds Pets by tags',
        description: 'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
        request: {
          query: {
            kind: 'origin',
            name: 'FindPetsByTagsReqParams',
            type: 'object',
            required: false,
            children: [
              {
                description: 'Tags to filter by',
                name: 'tags',
                required: false,
                kind: 'origin',
                type: 'array',
                children: [{ name: 'tags[]', type: 'string', required: false, kind: 'origin' }],
              },
            ],
          },
        },
        response: {
          body: {
            name: 'FindPetsByTagsResData',
            required: false,
            kind: 'origin',
            type: 'array',
            children: [
              {
                kind: 'alias',
                root: false,
                name: 'FindPetsByTagsResData[]',
                ref: '#/components/schemas/Pet',
                target: 'Pet',
                origin: 'Pet',
                props: [],
              },
            ],
          },
        },
      },
      {
        name: 'getInventory',
        method: 'get',
        url: '/store/inventory',
        title: 'Returns pet inventories by status',
        description: 'Returns a map of status codes to quantities',
        request: {},
        response: {
          body: { name: 'GetInventoryResData', required: false, kind: 'origin', type: 'object', children: [] },
        },
      },
      {
        name: 'placeOrder',
        method: 'post',
        url: '/store/order',
        title: 'Place an order for a pet',
        description: 'Place a new order in the store',
        request: {
          body: {
            kind: 'alias',
            root: false,
            name: 'PlaceOrderReqData',
            ref: '#/components/schemas/Order',
            target: 'Order',
            origin: 'Order',
            props: [],
          },
        },
        response: {
          body: {
            kind: 'alias',
            root: false,
            name: 'PlaceOrderResData',
            ref: '#/components/schemas/Order',
            target: 'Order',
            origin: 'Order',
            props: [],
          },
        },
      },
      {
        name: 'deleteOrder',
        method: 'delete',
        url: '/store/order/{orderId}',
        title: 'Delete purchase order by ID',
        description:
          'For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors',
        request: {
          path: {
            kind: 'origin',
            name: 'DeleteOrderReqPath',
            type: 'object',
            required: true,
            children: [
              {
                description: 'ID of the order that needs to be deleted',
                format: 'int64',
                name: 'orderId',
                type: 'number',
                required: true,
                kind: 'origin',
              },
            ],
          },
        },
        response: {},
      },
      {
        name: 'getOrderById',
        method: 'get',
        url: '/store/order/{orderId}',
        title: 'Find purchase order by ID',
        description:
          'For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.',
        request: {
          path: {
            kind: 'origin',
            name: 'GetOrderByIdReqPath',
            type: 'object',
            required: true,
            children: [
              {
                description: 'ID of order that needs to be fetched',
                format: 'int64',
                name: 'orderId',
                type: 'number',
                required: true,
                kind: 'origin',
              },
            ],
          },
        },
        response: {
          body: {
            kind: 'alias',
            root: false,
            name: 'GetOrderByIdResData',
            ref: '#/components/schemas/Order',
            target: 'Order',
            origin: 'Order',
            props: [],
          },
        },
      },
      {
        name: 'createUser',
        method: 'post',
        url: '/user',
        title: 'Create user',
        description: 'This can only be done by the logged in user.',
        request: {
          body: {
            kind: 'alias',
            root: false,
            name: 'CreateUserReqData',
            ref: '#/components/schemas/User',
            target: 'User',
            origin: 'User',
            props: [],
          },
        },
        response: {},
      },
      {
        name: 'deleteUser',
        method: 'delete',
        url: '/user/{username}',
        title: 'Delete user',
        description: 'This can only be done by the logged in user.',
        request: {
          path: {
            kind: 'origin',
            name: 'DeleteUserReqPath',
            type: 'object',
            required: true,
            children: [
              {
                description: 'The name that needs to be deleted',
                name: 'username',
                type: 'string',
                required: true,
                kind: 'origin',
              },
            ],
          },
        },
        response: {},
      },
      {
        name: 'getUserByName',
        method: 'get',
        url: '/user/{username}',
        title: 'Get user by user name',
        description: '',
        request: {
          path: {
            kind: 'origin',
            name: 'GetUserByNameReqPath',
            type: 'object',
            required: true,
            children: [
              {
                description: 'The name that needs to be fetched. Use user1 for testing. ',
                name: 'username',
                type: 'string',
                required: true,
                kind: 'origin',
              },
            ],
          },
        },
        response: {
          body: {
            kind: 'alias',
            root: false,
            name: 'GetUserByNameResData',
            ref: '#/components/schemas/User',
            target: 'User',
            origin: 'User',
            props: [],
          },
        },
      },
      {
        name: 'updateUser',
        method: 'put',
        url: '/user/{username}',
        title: 'Update user',
        description: 'This can only be done by the logged in user.',
        request: {
          path: {
            kind: 'origin',
            name: 'UpdateUserReqPath',
            type: 'object',
            required: true,
            children: [
              {
                description: 'name that need to be deleted',
                name: 'username',
                type: 'string',
                required: true,
                kind: 'origin',
              },
            ],
          },
          body: {
            kind: 'alias',
            root: false,
            name: 'UpdateUserReqData',
            ref: '#/components/schemas/User',
            target: 'User',
            origin: 'User',
            props: [],
          },
        },
        response: {},
      },
      {
        name: 'createUsersWithListInput',
        method: 'post',
        url: '/user/createWithList',
        title: 'Creates list of users with given input array',
        description: 'Creates list of users with given input array',
        request: {
          body: {
            name: 'CreateUsersWithListInputReqData',
            required: false,
            kind: 'origin',
            type: 'array',
            children: [
              {
                kind: 'alias',
                root: false,
                name: 'CreateUsersWithListInputReqData[]',
                ref: '#/components/schemas/User',
                target: 'User',
                origin: 'User',
                props: [],
              },
            ],
          },
        },
        response: {
          body: {
            kind: 'alias',
            root: false,
            name: 'CreateUsersWithListInputResData',
            ref: '#/components/schemas/User',
            target: 'User',
            origin: 'User',
            props: [],
          },
        },
      },
      {
        name: 'loginUser',
        method: 'get',
        url: '/user/login',
        title: 'Logs user into the system',
        description: '',
        request: {
          query: {
            kind: 'origin',
            name: 'LoginUserReqParams',
            type: 'object',
            required: false,
            children: [
              {
                description: 'The user name for login',
                name: 'username',
                type: 'string',
                required: false,
                kind: 'origin',
              },
              {
                description: 'The password for login in clear text',
                name: 'password',
                type: 'string',
                required: false,
                kind: 'origin',
              },
            ],
          },
        },
        response: { body: { name: 'LoginUserResData', type: 'string', required: false, kind: 'origin' } },
      },
      {
        name: 'logoutUser',
        method: 'get',
        url: '/user/logout',
        title: 'Logs out current logged in user session',
        description: '',
        request: {},
        response: {},
      },
    ],
  });
});
