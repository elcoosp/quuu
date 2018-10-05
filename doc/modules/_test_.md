[quuu](../README.md) > ["test"](../modules/_test_.md)

# External module: "test"

## Index

### Variables

* [a](_test_.md#a)
* [antisymmetry](_test_.md#antisymmetry)
* [associativity](_test_.md#associativity)
* [b](_test_.md#b)
* [c](_test_.md#c)
* [leftId](_test_.md#leftid)
* [reflexivity](_test_.md#reflexivity)
* [rightId](_test_.md#rightid)
* [symmetry](_test_.md#symmetry)
* [totality](_test_.md#totality)
* [transitivity](_test_.md#transitivity)

---

## Variables

<a id="a"></a>

### `<Const>` a

**● a**: *[IQueue](../interfaces/_index_.iqueue.md)* =  Quuu(1, 2, 3)

*Defined in [test.ts:2](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L2)*

___
<a id="antisymmetry"></a>

### `<Const>` antisymmetry

**● antisymmetry**: *`boolean`* =  a.lte(b) && b.lte(a) && a.equals(b)

*Defined in [test.ts:21](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L21)*

___
<a id="associativity"></a>

### `<Const>` associativity

**● associativity**: *`boolean`* =  a
		.concat(b)
		.concat(c)
		.equals(a.concat(b.concat(c)))

*Defined in [test.ts:29](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L29)*

___
<a id="b"></a>

### `<Const>` b

**● b**: *[IQueue](../interfaces/_index_.iqueue.md)* =  Quuu(1, 2, 3)

*Defined in [test.ts:3](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L3)*

___
<a id="c"></a>

### `<Const>` c

**● c**: *[IQueue](../interfaces/_index_.iqueue.md)* =  Quuu(1, 2, 3)

*Defined in [test.ts:4](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L4)*

___
<a id="leftid"></a>

### `<Const>` leftId

**● leftId**: *`boolean`* =  a
		.empty()
		.concat(a)
		.equals(a)

*Defined in [test.ts:39](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L39)*

___
<a id="reflexivity"></a>

### `<Const>` reflexivity

**● reflexivity**: *`boolean`* =  a.equals(b) === true

*Defined in [test.ts:8](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L8)*

___
<a id="rightid"></a>

### `<Const>` rightId

**● rightId**: *`boolean`* =  a.concat(a.empty()).equals(a)

*Defined in [test.ts:38](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L38)*

___
<a id="symmetry"></a>

### `<Const>` symmetry

**● symmetry**: *`boolean`* =  a.equals(b) === b.equals(a)

*Defined in [test.ts:9](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L9)*

___
<a id="totality"></a>

### `<Const>` totality

**● totality**: *`boolean`* =  a.lte(b) || b.lte(a)

*Defined in [test.ts:20](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L20)*

___
<a id="transitivity"></a>

### `<Const>` transitivity

**● transitivity**: *`boolean`* =  a.lte(b) && b.lte(c) && a.lte(c)

*Defined in [test.ts:10](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L10)*
*Defined in [test.ts:22](https://github.com/elcoosp/quuu/blob/b11b130/src/test.ts#L22)*

___

