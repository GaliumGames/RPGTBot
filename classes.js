var PlayerInfo = {
    'name': '',
    'level': 0,
    'xp': 0,
    'positionX': 0, 'positionY': 0,
    'inventory': new Inventory
};

var Inventory = [new InventorySlot, new InventorySlot, new InventorySlot, new InventorySlot, new InventorySlot, new InventorySlot, new InventorySlot, new InventorySlot, new InventorySlot, new InventorySlot];

var InventorySlot = {
    'name': '',
    'amount': 0
};