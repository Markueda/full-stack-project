import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import Form from "@/components/Form.vue";

describe("test", () => {
    let wrapper;
    beforeEach(() => {
        setActivePinia(createPinia())
        wrapper = mount(Form);
    });

    it("test if form is submitted by submit-button", async () => {
        await wrapper.find("#name").setValue("John");
        await wrapper.find("#email").setValue("John");
        await wrapper.find("#message").setValue("John");

        const spy = await vi.spyOn(wrapper.vm, "submitForm");
        await wrapper.find("#submit").trigger("click");
        expect(spy).toHaveBeenCalled();
    });
});

