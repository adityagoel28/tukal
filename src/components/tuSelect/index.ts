import tuComponent from "./tuSelect.vue";
import tuComponent2 from "./tuSelectOptionGroup.vue";
import tuComponent3 from "./tuSelectOption.vue";

tuComponent.install = (vue: any) => {
	vue.component(tuComponent.name, tuComponent);
	vue.component(tuComponent2.name, tuComponent2);
	vue.component(tuComponent3.name, tuComponent3);
};

if (typeof window !== "undefined" && (<any>window).Vue)
	tuComponent.install((<any>window).Vue);

class SelectOptionConstants {
	public static id : number = 0;
}

export { SelectOptionConstants, tuComponent as tuSelect, tuComponent2 as tuSelectOptionGroup, tuComponent3 as tuSelectOption };
