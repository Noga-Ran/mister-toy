import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'toys'
_createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query() {
  return storageService.query(KEY)
}

function getById(toyId) {
  return storageService.get(KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy.id) return storageService.put(KEY, toy)
  return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    _id: '',
    name: '',
    price: '',
    labels: [],
    createdAt: '',
    inStock: ''
  }
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
        {
            _id: utilService.makeId(),
            name: "Talking Doll",
            price: 123,
            labels: ["Doll", "Battery Powered", "Baby"],
            createAt: 1631031801011,
            inStock: true
        },
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}
