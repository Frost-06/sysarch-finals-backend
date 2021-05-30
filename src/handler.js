"use strict"
/*
Examples:
in: <i class="fas fa-save row-action-icon"/>
out: <font-awesome-icon icon="save" class="row-action-icon"  />
in: <i class="fas fa-filter action-icon action-icon--row" />
out: <font-awesome-icon icon="filter" class="action-icon action-icon--row"  />
in: <i v-show="row.item.activo" class="fas fa-check action-icon--row" />
out: <font-awesome-icon icon="check" class="action-icon--row" v-show="row.item.activo" />
in: <i @click="borrar(row.item)" class="fas fa-trash-alt action-icon action-icon--row" />
out: <font-awesome-icon icon="trash-alt" class="action-icon action-icon--row" @click="borrar(row.item)" />
in: <i class="fas fa-pencil-alt action-icon action-icon--row" @click="go(row.item, row.index, $event.target)" />
out: <font-awesome-icon icon="pencil-alt" class="action-icon action-icon--row"  @click="go(row.item, row.index, $event.target)" />
in: <i class="fa fa-times-circle" @click="id=''"/>
out: <font-awesome-icon icon="times-circle"  @click="id=''" />
*/

const class_regex = /class="(fas? fa-([\w-]+))((\s[\w-]*)*)?"/
const rest_regex = /<\i\s+?(.*?)\s*?\/>/

const convert = stage1 => {
    const class_matches = class_regex.exec(stage1);

    const icon_name = class_matches[2];
    let result = `<font-awesome-icon icon="${icon_name}"`;

    // see if there are remaining classes we have to save
    if (class_matches[3]) {
        result = `${result} class="${class_matches[3].trim()}"`;
    }

    // recover the rest of the tag as is
    const stage2 = stage1.replace(class_regex, "")
    if (rest_regex.test(stage2)) {
        result = `${result} ${stage2.replace(rest_regex, "$1").trim()}`;
    }

    return `${result} />`;
} // convert ...

module.exports = (context, callback) => {
    if (!class_regex.test(context)) {
        callback("Not likely a font-awesome <i />", undefined);
        return
    }

    callback(undefined, convert(context));
}